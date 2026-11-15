import { Pressable, StyleSheet, Text } from "react-native";

import { colors, spacing, typography } from "@shared/theme/tokens";

export interface ButtonProps {
  readonly label: string;
  readonly onPress: () => void;
  readonly disabled?: boolean;
  readonly accessibilityLabel?: string;
  readonly testID?: string;
}

export function Button({
  label,
  onPress,
  disabled = false,
  accessibilityLabel = label,
  testID,
}: ButtonProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled]}
      testID={testID}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: spacing.sm,
    padding: spacing.md,
  },
  disabled: {
    backgroundColor: colors.primaryDisabled,
  },
  label: {
    color: colors.onPrimary,
    fontSize: typography.button,
    fontWeight: "600",
  },
});
