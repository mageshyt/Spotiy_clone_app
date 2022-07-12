import { Text, View } from "react-native";
import CustomInputComponent from "./CustomInput.component";
import { MailIcon, LockClosedIcon } from "react-native-heroicons/outline";
const SigInComponent = () => {
  return (
    <View className="space-y-6 ">
      {/* Mail */}
      <CustomInputComponent
        Icon={MailIcon}
        title={"username or email"}
        placeholder={"Enter your username or email"}
      />

      <CustomInputComponent
        Icon={LockClosedIcon}
        title={"password"}
        placeholder="Enter password"
      />
      {/* Forget password */}
      <Text className="text-[#15BDFF] px-6">Forget Password ?</Text>
    </View>
  );
};

export default SigInComponent;
