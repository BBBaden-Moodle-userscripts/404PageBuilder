# 🎨 PageBuilder Library

The **PageBuilder** library is designed to assist with customizing web pages, with a primary focus on enhancing 404 error pages.

## 🚀 Installation

To use **PageBuilder**, include the library in your Violentmonkey script by adding the following link:

```text
https://github.com/BBBaden-Moodle-userscripts/PageBuilderLib/raw/main/PageBuilder.lib.user.js
```

## 🛠️ Functionalities

### **1. `document.selectPageContent()`**

- **Description**: Retrieves the element with the ID `page-content`.
- **Usage**: 
  ```javascript
  const pageContent = document.selectPageContent();
  ```

### **2. `document.clearPageContent()`**

- **Description**: Clears the inner HTML of the element with the ID `page-content`.
- **Usage**: 
  ```javascript
  document.clearPageContent();
  ```

### **3. `PageBuilder.prepare404Page(title, headerText)`**

- **Description**: Customizes the 404 error page:
  - **Title**: Sets the browser tab title to the provided `title`.
  - **Header Text**: Updates the main header text with `headerText`.
  - **Clear Content**: Clears the content inside the `page-content` element.
- **Usage**: 
  ```javascript
  PageBuilder.prepare404Page('Settings', 'Settings Page');
  ```

## 📄 License

This library is [licensed](LICENSE) under the MIT License.
