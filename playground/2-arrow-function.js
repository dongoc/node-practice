const event = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'John', 'Mike'],
  printGuestList() { // arrow function을 사용하면 this가 먹히지 않으므로 메소드의 형태로 쓴다. 객체도 이게 가능했구나.
    console.log('Guest list for' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name) // 얘는 왜 이렇게 됐지?
    })
  }
}

event.printGuestList();