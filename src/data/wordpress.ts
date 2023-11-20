export class WordpressServices {
  public static async getPageBySlug(slug) {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/pages?slug=${slug}`);
      const data = await res.json();
      return data[0];
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }

  public static async getPageByID(id) {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/pages?slug=${slug}`);
      const data = await res.json();
      return data[0];
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }

  public static async getPrimaryMenu() {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/menu`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }

  public static async getOptionsPage() {
    try {
      const res = await fetch(`https://pages.lu/wordpress/wp-json/wp/v2/options`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données :", error);
    }
  }
}
