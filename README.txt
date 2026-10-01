ONE CODEBASE: www/index.html is used everywhere.

1) PLAIN HTML
   Double-click www/index.html. Data saves in that browser on that device.

2) WINDOWS EXE
   Install Node.js, then in this folder:
     npm install
     npm start            (test as desktop app)
     npm run build        (exe appears in the dist folder)

3) ANDROID APK
   Install Node.js and Android Studio. In this folder:
     npm install
     npm run android:add  (first time only)
     npm run android:sync (run again whenever you change www/index.html)
     npm run android:open (opens Android Studio)
   In Android Studio, wait for Gradle sync, then
     Build > Build Bundle(s) / APK(s) > Build APK(s)
   Copy app-debug.apk to your phone and install it.
   Or plug in the phone (USB debugging on) and press Run.

Backups: Export / Import buttons work in all three versions.
On Android, Export opens the share sheet so you can save or send the file.
