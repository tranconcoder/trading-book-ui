export default class EnvUtil {
  public static getEnv(value: string | undefined, defaultValue?: string) {
    if (value) return value;
    if (!defaultValue) throw new Error("Not env value or default value!");
    return defaultValue;
  }

  public static getEnvInt(
    value: string | undefined,
    defaultValue?: number,
  ): number {
    return Number(this.getEnv(value, defaultValue?.toString()));
  }
}
