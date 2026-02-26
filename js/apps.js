/* ============================================================
   apps.js  --  DEPRECATED -- see js/apps/ for the new structure
   ============================================================
   Apps have been split into individual files in js/apps/.

   File structure:
     js/apps/_registry.js     <- APP_REGISTRY array + builders
     js/apps/about.js         <- About Me app
     js/apps/projects.js      <- Projects launcher app
     js/apps/proj_chess.js    <- Online Chess Platform detail
     js/apps/proj_banking.js  <- Banking App Testing detail
     js/apps/proj_calendar.js <- Google Calendar Dashboard detail
     js/apps/proj_fractal.js  <- Mandelbrot Fractal detail
     js/apps/skills.js        <- Skills app
     js/apps/contact.js       <- Contact app
     js/apps/welcome.js       <- Welcome splash app
     js/apps/resume.js        <- Resume app

   To add a new app:
   1. Create js/apps/myapp.js and call APP_REGISTRY.push({...})
   2. Add <script src="js/apps/myapp.js"></script> in index.html
      after the other app script tags.

   This file is NOT loaded by index.html.
   ============================================================ */
