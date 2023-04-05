### Barrel File Structure

1. All components should have barrel files named `index.ts`
2. The structure of the barrel file should always be following:

```
export { default } from './Component';
export * from './Component';
```

### Why?

It makes our life a little bit simpler

Our imports will be looking like this:

```JavaScript
// By referencing index.ts
import { ComponentA, ComponentAProps } from 'src/components/componentA';
```

Rather than this:
```JavaScript
// By referencing the files directly
import { ComponentA } from 'src/components/componentA/ComponentA';
import { ComponentAProps } from 'src/components/componentA/ComponentA.types';
```