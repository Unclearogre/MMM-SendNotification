Module.register("MMM-SendNotification", {
  defaults: {
    interval: 60000,
    notification: "something",
    payload:null
  },
  suspended:false,
  intervalHandle:null,
  notificationReceived(topic, data){
      if(topic ==="ALL_MODULES_STARTED"){
        this.startup()
      } else if(topic==this.config.notification){
        this.restartTimer();
      }
  },
  suspend(){
    this.suspended=true;
    this.stopTimer();
  },
  resume(){
    this.suspended=false
    if(this.intervalHandle==null)
      this.startup()
  },
  startup(){
     this.do_action()
     this.startTimer()
  },
  startTimer(){
      this.intervalHandle=setInterval(()=>{this.do_action()},this.config.interval,this)
  },
  stopTimer(){
      clearInterval(this.intervalHandle);
      this.intervalHandle=null
  },
  restartTimer(){
    this.stopTimer()
    this.startTimer();
  },
  do_action(){
    if(!this.suspended){
       this.sendNotification(this.config.notification, this.config.payload)
    }
  }
})
