let count = 0;
const getIndex = (s) => (s || ':') + (count += 1);

// Replace hash slug with button
function hashTags(value) {
  return value.replace(/#(\S*)/g, '<button @click="click">$1</button>');
}

export default function (parent) {
  const cnom = 'dynacomp' + getIndex('_');

  return {
    name: cnom,
    template: `<div class="component">${hashTags(parent.message)}</div>`,
    methods: {
      click() {
        parent.message += '!';
        console.log(cnom + '.click: ', parent.message);
      },
    },
  };
}
