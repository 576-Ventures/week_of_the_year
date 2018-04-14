(function () {
  const el = document.getElementById('week-number')
  const weekNumber = moment().format('w')
  const p = document.createElement('p')
  p.textContent = weekNumber
  el.appendChild(p)
})()
