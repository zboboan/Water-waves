function WaterWave(){
        this.settins = {
            el:null,
            fn:function (){},
            WH:20,
            backColor:'#999',
            scale:7
        }
    };
    
    WaterWave.prototype.init = function (opt){
        
        this.extend(this.settins,opt);
        
        
        var This = this;
        
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        
        style.innerHTML='.WaterWaveRipple {'+
                'display: inline-block;'+
                'width:'+this.settins.WH+'px;'+
                'height:'+this.settins.WH+'px;'+
                'background:'+this.settins.backColor+';'+
                'border-radius: 100%;'+
                'position: absolute;'+
                'top:0;'+
                'left:0;'+
                'opacity:0.5;'+
                'filter:alpha(opacity=50);'+
                '-moz-opacity:0.5;'+
                '-khtml-opacity:0.5;'+
                '-webkit-opacity:0.5;'+
                '-webkit-animation: rippleMove 1.5s ease-out forwards;}'+
                '-moz-animation: rippleMove 1.5s ease-out forwards;}'+
                '-ms-animation: rippleMove 1.5s ease-out forwards;}'+
                '-o-animation: rippleMove 1.5s ease-out forwards;}'+
                'animation: rippleMove 1.5s ease-out forwards;}'+

            '@-webkit-keyframes rippleMove{'+
                'from{opacity: .5;-webkit-transform:scale(1);}'+
                'to{opacity: 0;-webkit-transform:scale('+this.settins.scale+');}}'+
            '@-moz-keyframes rippleMove{'+
                'from{opacity: .5;-moz-transform:scale(1);}'+
                'to{opacity: 0;-moz-transform:scale('+this.settins.scale+');}}'+
            '@-ms-keyframes rippleMove{'+
                'from{opacity: .5;-ms-transform:scale(1);}'+
                'to{opacity: 0;-ms-transform:scale('+this.settins.scale+');}}'+
            '@-o-keyframes rippleMove{'+
                'from{opacity: .5;-o-transform:scale(1);}'+
                'to{opacity: 0;-o-transform:scale('+this.settins.scale+');}}'+
            '@keyframes rippleMove{'+
                'from{opacity: .5;transform:scale(1);}'+
                'to{opacity: 0;transform:scale('+this.settins.scale+');}}';
        
        head.appendChild(style);
        
        for(var i=0;i<this.settins.el.length;i++){
            this.settins.el[i].onclick = function (){
                This.found(this);
                This.settins.fn();
            }
        }
    };
    
    WaterWave.prototype.found = function (obj){
        var ev = window.event || ev || arguments.callee.caller.arguments[0];
        var span = document.createElement('span');

        var TT = document.body.scrollTop || document.documentElement.scrollTop;
        var LL = document.body.scrollLeft || document.documentElement.scrollLeft;

        var pl = obj.offsetLeft;
        var pt = obj.offsetTop;
        var L = (ev.clientX - pl - this.settins.WH / 2) + LL;
        var T = (ev.clientY - pt - this.settins.WH / 2) + TT;
        var This = this;
        var n = 1;
        
        n++;
        
        obj.style.overflow = 'hidden';
        obj.style.position = 'relative';

        span.style.marginTop = T+'px';
        span.style.marginLeft = L+'px';
        span.style.zIndex = n;

        span.className = 'WaterWaveRipple';
        obj.appendChild(span); 
        
        setTimeout(function(){
            obj.removeChild(span);
        },760)
    }
    
    WaterWave.prototype.extend = function(obj1,obj2){
        for(var attr in obj2){
            obj1[attr] = obj2[attr];
        }
    }