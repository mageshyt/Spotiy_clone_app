import { KeyboardAvoidingView, Text, View } from "react-native";
import CustomInputComponent from "./CustomInput.component";
import { MailIcon, LockClosedIcon } from "react-native-heroicons/outline";
const SigInComponent = () => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  return (
    <KeyboardAvoidingView
      enabled
      className="space-y-6 "
      behavior="position"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
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
    </KeyboardAvoidingView>
  );
};

export default SigInComponent;
