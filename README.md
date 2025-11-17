Prevent & Respond Learning - Static Site

This is a small static site that demonstrates courses, modules, locking, and a mini-quiz.

How it works

- Courses are listed in the left sidebar.
- Each course contains modules.
- Modules after the first are locked until the previous module's quiz is passed or the module is marked complete.
- Progress is stored in localStorage under key `lp_progress_v1`.

Open locally

1. Double-click `index.html` to open in a browser, or
2. Run a simple static server (recommended) from PowerShell:

```powershell
# Serve current directory on port 8000 (if Python is installed)
python -m http.server 8000
# then open http://localhost:8000
```

Notes

- This is a minimal prototype. I can extend it with routing, accessibility improvements, more quizzes, or server-backed progress tracking if you want.