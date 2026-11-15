import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Button } from "@shared/components/Button";
import { colors, spacing, typography } from "@shared/theme/tokens";

import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, result, submit } = useLogin();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        accessibilityLabel="Adresse e-mail"
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        onChangeText={setEmail}
        placeholder="Adresse e-mail"
        value={email}
      />
      <TextInput
        accessibilityLabel="Mot de passe"
        autoComplete="password"
        onChangeText={setPassword}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
      />
      {error ? (
        <Text accessibilityRole="alert" style={styles.error}>
          {error}
        </Text>
      ) : null}
      {result ? <Text>Bienvenue, {result.user.email}</Text> : null}
      {isLoading ? (
        <ActivityIndicator accessibilityLabel="Connexion en cours" />
      ) : null}
      <Button
        accessibilityLabel="Se connecter"
        disabled={isLoading || !email || !password}
        label="Se connecter"
        onPress={() => void submit(email, password)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    gap: spacing.md,
    padding: spacing.lg,
  },
  error: {
    color: colors.error,
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: "700",
  },
});
