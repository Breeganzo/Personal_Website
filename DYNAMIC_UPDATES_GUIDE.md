# Dynamic Updates Guide

This portfolio website has several features that automatically update based on your data. Here's what's dynamic and how to manage it:

---

## 🔄 Automatically Updating Features

### 1. **Years of Experience** (Main Page)
- **What**: Displays your total years of professional experience
- **How it works**: Automatically calculates from your first job start date (February 2022 at Atkins) to the current date
- **Location**: `index.html` - Hero Stats section
- **Code**: `script.js` - `updateExperienceYears()` function
- **No action needed**: This updates automatically every time someone visits your site

---

### 2. **Certifications Count** (Main Page)
- **What**: Shows the number of completed certifications
- **How it works**: Automatically counts all certification items marked with ✅ in the tooltip
- **Location**: `index.html` - Hero Stats section
- **Code**: `script.js` - `updateCertificationsCount()` function

#### ✅ How to Add a New Completed Certification:
1. Open `index.html`
2. Find the `certifications-tooltip` section (around line 124)
3. Add a new line BEFORE the "Currently Preparing" section:
   ```html
   <div class="cert-item">✅ Your New Certification Name</div>
   ```
4. Save the file
5. **The count will automatically update!** No need to manually change the number.

#### 📚 How to Add a Certification You're Preparing For:
1. Open `index.html`
2. Find the "Currently Preparing" section in the tooltip
3. Add a new line:
   ```html
   <div class="cert-item preparing">⏳ Your Target Certification</div>
   ```
4. Save the file

#### 🎓 How to Move a Certification from "Preparing" to "Completed":
1. Find the certification in the "Preparing" section
2. Change from:
   ```html
   <div class="cert-item preparing">⏳ Certification Name</div>
   ```
   To:
   ```html
   <div class="cert-item">✅ Certification Name</div>
   ```
3. Move it ABOVE the "Currently Preparing:" title line
4. **The count updates automatically!**

---

### 3. **Kyndryl Experience Duration** (Experience Page)
- **What**: Shows months worked at Kyndryl (e.g., "10 months")
- **How it works**: JavaScript calculates from January 2025 to current month/year
- **Location**: `experience.html` - Inline script at bottom of file
- **Updates**: Every month automatically when someone loads the page
- **No action needed**: Completely automatic

---

### 4. **Skill Progress Bars** (Skills Page)
- **What**: Animated progress bars showing skill proficiency
- **How it works**: Uses 4 fixed levels:
  - **Beginner**: 25% (Gray badge)
  - **Intermediate**: 50% (Blue badge)
  - **Advanced**: 75% (Green badge)
  - **Expert**: 100% (Red badge)
- **Location**: `skills.html`
- **To update**: Change the `data-progress` attribute and skill-level class

---

## 📊 Current Stats Summary

### Main Page (index.html):
- ✅ **Years Experience**: Auto-calculated from Feb 2022
- ✅ **Certifications Count**: Auto-counted from completed list
  - Currently: 4 completed (AWS Cloud Practitioner, AWS AI Practitioner, AZ-900, SC-900)
  - Preparing: 4 in progress

### Experience Page (experience.html):
- ✅ **Kyndryl Duration**: Auto-updated monthly from Jan 2025

---

## 🎯 Quick Reference: Current Certifications

### Completed (✅):
1. AWS Cloud Practitioner
2. AWS AI Practitioner
3. Azure Fundamentals (AZ-900)
4. Azure Security (SC-900)

### Preparing (⏳):
1. AWS Solutions Architect Associate
2. AWS Machine Learning Specialty
3. Azure AI Engineer Associate (AI-102)
4. Terraform Associate

---

## 💡 Pro Tips

1. **Only use ✅ emoji** for completed certifications - this is what the script counts
2. **Use ⏳ emoji** for certifications in progress
3. **Don't manually change** the certification count number - it updates automatically
4. **Don't change** the experience years manually - it calculates automatically
5. **Keep the structure** - Don't remove the `.cert-item` class or the tooltip will break

---

## 🔧 Technical Details

### Files with Dynamic Features:
- `script.js` - Main dynamic calculation logic
- `index.html` - Certifications tooltip and stats display
- `experience.html` - Kyndryl duration inline script
- `style.css` - Tooltip styling and animations

### Functions:
- `updateCertificationsCount()` - Counts ✅ certifications
- `updateExperienceYears()` - Calculates years from Feb 2022
- `updateKyndrylDuration()` - Calculates months from Jan 2025 (in experience.html)

---

## 📝 Example: Adding Your First AWS Solutions Architect Certification

**Step 1**: You pass the exam! 🎉

**Step 2**: Open `index.html`, find this section:
```html
<div class="cert-item preparing">⏳ AWS Solutions Architect Associate</div>
```

**Step 3**: Change it to:
```html
<div class="cert-item">✅ AWS Solutions Architect Associate</div>
```

**Step 4**: Move it above the "📚 Currently Preparing:" line

**Step 5**: Save the file

**Result**: The certification count automatically changes from "4+" to "5+"! 🎊

---

Last Updated: November 2025
