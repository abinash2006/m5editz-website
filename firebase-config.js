// ══════════════════════════════════════════════════════════════
//  M5 EDITZ — Firebase Configuration
//  Project: m5editz | Connected to Firebase Console
// ══════════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "AIzaSyCBBQ52VFqR4ruLZKaxbB_qwzZWpGWk0tQ",
  authDomain:        "m5editz.firebaseapp.com",
  projectId:         "m5editz",
  storageBucket:     "m5editz.firebasestorage.app",
  messagingSenderId: "1081998466713",
  appId:             "1:1081998466713:web:c4429450e0bba9a0f52208",
  measurementId:     "G-8W0VT7QN8S"
};

// Initialize Firebase (compat SDK — used via CDN script tags in HTML)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

// Offline persistence (bookings saved even without internet)
db.enablePersistence().catch(() => {});

// ══════════════════════════════════════════════════════════════
//  ADMIN CREDENTIALS
//  Username : admin
//  Password : m5editz2025
// ══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
//  NOTIFICATION SETTINGS
// ══════════════════════════════════════════════════════════════
const OWNER_EMAIL    = 'abiabinash355@gmail.com';
const OWNER_WHATSAPP = '919025908116';   // Country code + number (no +)
const OWNER_PHONE    = '93457 07668';

// EmailJS — set up at https://emailjs.com (free: 200 emails/month)
// Once configured, paste your keys below to enable auto-emails on booking
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
