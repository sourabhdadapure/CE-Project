export default class Utils {
  static moneyFormatter(input: any) {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
