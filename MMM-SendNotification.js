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
      }
  },
  suspend(){
    this.suspended=true;
    clearInterval(this.intervalHandle);
  },
  resume(){
    this.suspended=false
    this.startup()
  },
  startup(){
     this.do_action()
     setInterval(this.do_action,this.config.interval)
  }
  do_action(){
    if(!this.suspended){
       this.sendNotification(this.config.notifitation, this.config.payload)
    }
  }
})
