export default class EnvUtil {
  public static getEnv<T = string>(value: string | null, defaultValue?: T) {
    if (value) return value;
    if (!defaultValue) throw new Error("Not env value or default value!");
    return defaultValue;
  }
}
