   send notification(and payload) every interval time

   install
      cd ~/MagicMirror/modules
      git clone https://github.com/sdetweil/MMM-SendNotification

   config

       interval : nnnnn   millisseconds, default 60000 (1 minute)
       notification:  xxxxx   some string "PAGE_CHANGED", default "something"
       payloadL    yyy        some value, string, number or object, default null

```
   {
       module:"MMM_SendNotification",
       config:{
          interval:   60000,
          notification: "PAGE_CHANGED",
          payload: null
       }
   }
```
   payload could be number
        : 1
   or a string
        : "hello"
   or a structure/object
        :  { name:"fred", address:"somestreet"}

