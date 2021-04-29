function pairElement(str) {

  function findPair(x) {
    switch (x) {
      case 'A': return ['A', 'T'];
      case 'T': return ['T', 'A'];
      case 'C': return ['C', 'G'];
      case 'G': return ['G', 'C'];
    }
  }

  return str.split('').map(findPair);
}

var x = pairElement("GCG");
x
