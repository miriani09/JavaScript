function digital_clock(){
    d = new Date()
    h = d.toLocaleTimeString()
    document.getElementById("clock").innerHTML = h
}
interval1 = setInterval(digital_clock, 1000)

function Year_Month(){
    t = new Date()
    y = t.getFullYear()
    m = t.getMonth()
    date = new Date(y, m)
    s=date.toLocaleString('default', { month: 'long' })
    document.getElementById("month").innerHTML = `${s} ${y}`
}
Year_Month()

