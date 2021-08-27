const LoadingComponent = Vue.component('LoadingComponent', {
  template: '<div>LoadingComponent</div>',
});
const ErrorComponent = Vue.component('ErrorComponent', {
  template: '<div>ErrorComponent</div>',
});

const AsyncComponent = {
  el: '#App',
  name: 'AsyncComponent',
  // The component to load (should be a Promise)
  component: [LoadingComponent, ErrorComponent, import('./LateComponent.js')],
  // A component to use while the async component is loading
  loading: LoadingComponent,
  // A component to use if the load fails
  error: ErrorComponent,
  // Delay before showing the loading component. Default: 200ms.
  delay: 1200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
};

new Vue(AsyncComponent);
