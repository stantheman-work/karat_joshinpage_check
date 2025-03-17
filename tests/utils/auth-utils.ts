import * as path from "path"

export class AuthUtils {
  static getSuperAdminAuthState() {
    return path.join(__dirname, "..", "..", ".auth", "super-admin.json")
  }

  static getDefaultBrand() {
    return {
      id: process.env.DEFAULT_BRAND_ID || "zeSOqlBCiw2pH5FmLYKl",
      name: process.env.DEFAULT_BRAND_NAME || "24karat",
    }
  }
}
