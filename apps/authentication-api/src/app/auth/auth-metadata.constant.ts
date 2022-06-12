import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

// Decorator to make route public
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
