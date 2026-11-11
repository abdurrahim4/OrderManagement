# Delta Kebab — Restaurant Order Dashboard V2

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173. You always see the employee login page first unless you already have an active session in that browser tab.

## Demo credentials (testing only)

| Branch | Email | Password |
| --- | --- | --- |
| Kowale | kowale@deltakebab.demo | KowaleDemo2026! |
| Gdańsk | gdansk@deltakebab.demo | GdanskDemo2026! |
| Pruszcz Gdański | pruszcz@deltakebab.demo | PruszczDemo2026! |

Each employee account is associated with a branch. There is no branch selector on the employee dashboard. Logout returns to the login screen.

## Test flow

1. Sign in using Kowale credentials.
2. Click the floating + button in the lower-right corner to create a Kowale test order.
3. Click the order card to open its details popup.
4. Review customer name, phone, address, ordered products, sizes, meat, sauces, extras, instructions, and total.
5. Accept or cancel from the popup. Accepted orders enter Preparing; advance them to Delivering and Done.
6. Print a receipt using the popup's Print button.
7. Logout and sign in to another branch. Kowale orders will not appear on the other branch dashboard.

## Limitations

This is a **local browser-only demo**. Credentials are stored in source code and checked in the browser, so the branch isolation is a UI demonstration, **not real security**. All branches' orders exist in browser LocalStorage and are not synchronized across devices. For production, enforce authentication and branch access on the Node.js server, store password hashes, use MongoDB and real-time Socket.IO, and avoid exposing passwords in frontend code.

No actual customer orders are sent to this demo. Sound requires the user to click Enable sound first, and browser background restrictions apply.


## Sound and background-tab notifications

After logging in, click **Enable sound** once to unlock audio playback, then click **Enable notifications** to grant desktop notifications (requires localhost or HTTPS). The alarm repeats while there are unaccepted new orders. New orders created in another tab of the same browser profile synchronize via the storage event and trigger a desktop notification when permitted.

**Limitations:** Browsers may throttle or suspend background tabs. Notifications and sounds are not guaranteed when the browser is closed, the computer sleeps, or the phone is locked. This local-only demo has no server push and cannot receive orders from other devices. Production requires a server-side order API, authenticated branch subscriptions, and Web Push for closed-tab notifications.
"# OrderManagement" 
