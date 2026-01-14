# Git Branch Workflow Guide - Company Best Practices

## 🎯 Step-by-Step Workflow

### **Step 1: Create a Feature Branch**

```bash
# Make sure you're on main and it's up to date
git checkout main
git pull origin main  # (if you have a remote)

# Create and switch to a new feature branch
git checkout -b feature/add-footer-component
```

**Branch Naming Conventions:**
- `feature/` - for new features (e.g., `feature/add-footer-component`)
- `fix/` - for bug fixes (e.g., `fix/navbar-mobile-issue`)
- `refactor/` - for code refactoring (e.g., `refactor/theme-toggle-logic`)
- `style/` - for styling changes (e.g., `style/improve-button-design`)

---

### **Step 2: Make Your Changes**

Work on your feature branch. Make changes, test them, iterate.

**Best Practices:**
- ✅ Make small, focused commits
- ✅ Test your code before committing
- ✅ Follow the project's code style
- ✅ Don't commit sensitive data (API keys, passwords)

---

### **Step 3: Stage Your Changes**

```bash
# Check what files have changed
git status

# Stage specific files
git add src/component/Footer.jsx
git add src/App.jsx

# OR stage all changes
git add .

# Check what's staged
git status
```

---

### **Step 4: Commit Your Changes**

```bash
# Commit with a descriptive message
git commit -m "feat: add footer component with social links and copyright"

# Good commit message format:
# <type>: <subject>
# 
# Types: feat, fix, docs, style, refactor, test, chore
# Subject: brief description (50 chars or less)
```

**Commit Message Examples:**
- ✅ `feat: add footer component with social media links`
- ✅ `fix: resolve mobile menu closing issue`
- ✅ `style: improve button hover animations`
- ❌ `update files`
- ❌ `fix stuff`

---

### **Step 5: Keep Your Branch Updated**

**Regularly sync with main branch:**

```bash
# Switch to main
git checkout main

# Pull latest changes
git pull origin main

# Switch back to your feature branch
git checkout feature/add-footer-component

# Merge main into your branch (or rebase)
git merge main
# OR
git rebase main
```

**Why?** This prevents merge conflicts and keeps your branch current.

---

### **Step 6: Push Your Branch**

```bash
# Push your branch to remote (if you have one)
git push origin feature/add-footer-component

# First time pushing? Set upstream:
git push -u origin feature/add-footer-component
```

---

### **Step 7: Create Pull Request (PR)**

When your feature is complete:

1. Push your branch
2. Create a Pull Request on GitHub/GitLab/etc.
3. Fill out PR description:
   - What changed?
   - Why did you change it?
   - How to test?
   - Screenshots (if UI changes)

---

### **Step 8: Address Review Feedback**

```bash
# Make requested changes
# Stage and commit
git add .
git commit -m "fix: address PR review comments"

# Push updates
git push origin feature/add-footer-component
```

---

### **Step 9: After PR is Merged**

```bash
# Switch back to main
git checkout main

# Pull the merged changes
git pull origin main

# Delete your local feature branch (optional)
git branch -d feature/add-footer-component

# Delete remote branch (if it wasn't auto-deleted)
git push origin --delete feature/add-footer-component
```

---

## 🔍 Useful Git Commands

```bash
# See all branches
git branch

# See branch with remote tracking info
git branch -a

# See commit history
git log --oneline --graph --all

# See what changed
git diff

# See what's staged
git diff --staged

# Undo changes to a file (before staging)
git checkout -- filename

# Unstage a file
git reset HEAD filename

# Amend last commit (if you forgot something)
git add forgotten-file.js
git commit --amend --no-edit
```

---

## ⚠️ Common Mistakes to Avoid

1. **Don't commit directly to main** - Always use feature branches
2. **Don't commit large files** - Check `.gitignore`
3. **Don't commit broken code** - Test first!
4. **Don't forget to pull main** - Sync regularly
5. **Don't force push** - Unless you're sure (and never on main!)

---

## 📋 Pre-Commit Checklist

Before committing, ask yourself:
- [ ] Does the code work?
- [ ] Are there any console errors?
- [ ] Does it follow project conventions?
- [ ] Are there any sensitive data (API keys, passwords)?
- [ ] Is the commit message clear and descriptive?
- [ ] Have I tested the changes?

---

## 🎓 Real-World Scenario

**Scenario:** You're assigned to add a footer component

1. `git checkout main` → `git pull`
2. `git checkout -b feature/add-footer-component`
3. Create `Footer.jsx`, update `App.jsx`
4. Test locally (`npm run dev`)
5. `git add .` → `git commit -m "feat: add footer component"`
6. `git checkout main` → `git pull` → `git checkout feature/add-footer-component` → `git merge main`
7. `git push origin feature/add-footer-component`
8. Create PR, get review, merge!

---

## 💡 Pro Tips

- **Commit often** - Small commits are easier to review and revert
- **Write good commit messages** - Your future self will thank you
- **Use `.gitignore`** - Don't commit `node_modules`, `.env`, etc.
- **Keep branches focused** - One feature per branch
- **Communicate** - Let your team know what you're working on



















