import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

// Map service image keys to actual asset URLs using Vite glob
const _serviceImages = import.meta.glob('../assets/services/*.png', { eager: true, as: 'url' });

export function getServiceImage(key) {
	if (!key) return null;
	const p = `../assets/services/${key}.png`;
	return _serviceImages[p] || null;
}