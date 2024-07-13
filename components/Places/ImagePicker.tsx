import { colors } from "@/constants/Colors";
import { Camera } from "@tamagui/lucide-icons";
import {
  ImagePickerAsset,
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";
import { Button, Image, Text, View } from "tamagui";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
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

    if (image.canceled) {
      return;
    }

    setPickedImage(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = (
      <Image width={"100%"} height={"100%"} source={{ uri: pickedImage }} />
    );
  }

  return (
    <View>
      <View
        height={200}
        width={"100%"}
        marginVertical={8}
        justifyContent="center"
        alignItems="center"
        backgroundColor={colors.primary100}
        borderRadius={4}
      >
        {imagePreview}
      </View>

      <Button
        variant="outlined"
        borderColor={colors.primary500}
        margin={4}
        onPress={takeImageHandler}
        color={colors.primary500}
        icon={Camera}
        scaleIcon={1.5}
      >
        Take Image
      </Button>
    </View>
  );
};

export default ImagePicker;
