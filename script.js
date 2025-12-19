// หน้า1-8คือการเลื่อนหน้าแบบสมูท
const เลื่อนลง = document.querySelector('#หน้า1');

เลื่อนลง.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// -------------------------------------

