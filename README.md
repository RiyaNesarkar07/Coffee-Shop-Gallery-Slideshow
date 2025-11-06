# ☕ Coffee Shop Gallery & Slideshow

## 📖 Overview
This project showcases a **Coffee Shop Image Gallery and Slideshow** built with **HTML, CSS, and JavaScript**.  
It includes:
- A **clickable thumbnail gallery** (click or keyboard navigation).  
- An **automatic slideshow** with smooth transitions and captions.  
- **Responsive design** that adapts to mobile screens.  
- **Coffee-themed design** with elegant styling.

---

## 📁 Project Structure
```
coffee-gallery/
│
├── index.html       # Main webpage
├── style.css        # Styles for gallery and slideshow
├── scripts.js       # JavaScript for interactivity and transitions
├── README.md        # Documentation (this file)
└── images/          # Folder for your coffee images
```

---

## 🖼️ Adding Your Own Images

1. Create a folder named **`images`** inside your project directory.  
2. Add your **own coffee images** (no need for URLs).  
   Example:
   ```
   images/
   ├── coffee1-large.jpg
   ├── coffee2-large.jpg
   ├── coffee3-large.jpg
   ├── coffee4-large.jpg
   ├── coffee1-thumb.jpg
   ├── coffee2-thumb.jpg
   ├── coffee3-thumb.jpg
   └── coffee4-thumb.jpg
   ```
3. Update the image file names in **`index.html`** if needed:
   ```html
   <img src="images/coffee1-thumb.jpg" data-large="images/coffee1-large.jpg" />
   ```

---

## ⚙️ How to Run
1. Download or clone the project folder.  
2. Open **`index.html`** in your browser (double-click it).  
3. The gallery and slideshow will start automatically.  

No external libraries or setup required — everything runs locally.

---

## 🧠 Features
✅ Click thumbnails to change the main image.  
✅ Automatic slideshow that cycles every few seconds.  
✅ Pause on hover and resume when you move the cursor away.  
✅ Responsive layout for mobile, tablet, and desktop.  
✅ Keyboard controls:
 
---

## 🎨 Customize
- Change colors and shadows in `style.css`.
- Adjust slideshow speed in `scripts.js`:
  ```js
  slideInterval = setInterval(nextSlide, 6000);
  ```
  (You can make it faster or slower by changing the time in milliseconds.)

---

 
