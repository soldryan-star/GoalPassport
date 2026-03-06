# Testing the site on your phone

## 1. Same Wi-Fi (easiest)

**On your computer**

- Start the app: `npm run dev`
- Note the **Network** URL in the terminal (e.g. `http://192.168.x.x:3000` or `:3001`).

**On your phone**

- Connect the phone to the **same Wi-Fi** as the computer.
- Open the browser and go to that Network URL.

You can then test: hamburger menu, scroll to form, sticky CTA, and that the bottom bar clears the iPhone home indicator (safe area).

---

## 2. Chrome / Safari dev tools (no phone)

**Chrome (desktop)**

- Open the site (e.g. `http://localhost:3000`).
- Open DevTools (`F12` or `Cmd+Option+I` on Mac).
- Toggle device toolbar (phone/tablet icon) or `Cmd+Shift+M` (Mac) / `Ctrl+Shift+M` (Windows).
- Pick a device (e.g. iPhone 14 Pro) or set a custom width. Refresh if needed.

**Safari (Mac)**

- Use **Develop > Enter Responsive Design Mode** or **Develop > Simulator** with Xcode’s iOS Simulator.

---

## 3. Test from phone when not on same network (optional)

Use a tunnel so the phone can reach your laptop:

- **ngrok:** `ngrok http 3000` (or the port your dev server uses), then open the `https://...ngrok.io` URL on the phone.
- **localtunnel:** `npx localtunnel --port 3000`
- **Cloudflare Tunnel:** `cloudflared tunnel` (see Cloudflare docs).

---

## Quick checklist on the phone

- **Viewport:** Page fits the screen, no horizontal scroll; text is readable.
- **Header:** Hamburger appears on narrow width; tapping opens the menu; tapping a link navigates and closes the menu.
- **Sticky CTA:** Scroll down until the form is off-screen; bottom bar appears. Tap “Get free alerts” to scroll to the form. On iPhone, the bar sits above the home indicator.
- **Form:** All fields and submit button are tappable; keyboard opens; nothing cut off.
- **Links:** “Get Free Alerts”, “Browse Areas”, Call, WhatsApp, and footer links work.
