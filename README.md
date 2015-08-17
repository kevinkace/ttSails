# ttSails

Skateboarding trick tracking API NSA style

V1:

```
[
    "/tricks" : {
        get : {
            return : {
                none : [{
                    id      : "int - trick id",
                    name    : "string - primary name of trick",
                    aliases : "string[,string] - comma separated list of aliases"
                }],
                id : {
                    id      : "int - trick id",
                    name    : "string - primary name of trick",
                    aliases : "string[,string] - comma separated list of aliases"
                },
                ids : [{
                    id      : "int - trick id",
                    name    : "string - primary name of trick",
                    aliases : "string[,string] - comma separated list of aliases"
                }]
            },
            params : {
                id  : "int - single id of a trick",
                ids : "int[,int...] - comma separated list of ids"
            }
        },
        post : {
        }
    }
]
```