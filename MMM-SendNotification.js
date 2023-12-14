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
    this.intervalHandle=null
  },
  resume(){
    this.suspended=false
    if(this.intervalHandle==null)
      this.startup()
  },
  startup(){
     this.do_action()
     this.intervalHandle=setInterval(()=>{this.do_action()},this.config.interval,this)
  },
  do_action(){
    if(!this.suspended){
       this.sendNotification(this.config.notification, this.config.payload)
    }
  }
})
