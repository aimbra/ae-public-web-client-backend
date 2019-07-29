export class Utils {

  static hasValue(value: any): boolean {
    if (value as number) {
      return value !== undefined || value !== null ? value : -1;
    }

    if (value as string) {
      return value !== undefined || value !== null || value !== '';
    }

    return undefined;
  }

}
