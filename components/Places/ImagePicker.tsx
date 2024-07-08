import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { Alert } from "react-native";
import { Button, Text, View } from "tamagui";

const ImagePicker = () => {
  const [cameraPermissionsInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (
      cameraPermissionsInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionsInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant camera access to use this app"
      );
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    console.log(image);
  };
  return (
    <View>
      <View></View>
      <Button onPress={takeImageHandler}>Take Image</Button>
    </View>
  );
};

export default ImagePicker;
