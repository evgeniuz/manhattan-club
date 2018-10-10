export function unregisterServiceWorker(): void {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then(
			(registration: ServiceWorkerRegistration) => registration.unregister()
		)
	}
}
