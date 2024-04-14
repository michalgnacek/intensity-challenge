class IntensityManager {
    constructor(array = []) {
        //this.segments = [[10,1], [30,0]];
        this.segments = array;
    }

    printSegments(){
        console.log(this.segments);
    }

    add(from, to, increment){

        if(this.segments.length === 0){
            this.segments = [[from, increment], [to, 0]]
            return this.segments
        }
    
        let fromExists = false
        let toExists = false
        let lastIncrement = this.segments[0][1]
    
        for(let i = 0; i < this.segments.length; i++){
    
            let itm = this.segments[i]
            let segmentVal = itm[0]
    
            if(segmentVal < from){
                continue
            }
    
            // Assign to & from
            if(!fromExists){
                if(segmentVal === from){
                    fromExists = true
                }
                else if(segmentVal >= from){
                    this.segments.splice(i, 0, [from, lastIncrement + increment])
                    fromExists = true
                    continue
                }
            }
    
            if(!toExists){
                if(segmentVal === to){
                    toExists = true
                    break
                }
                else if(segmentVal >= to){
                    this.segments.splice(i, 0, [to, lastIncrement + increment])
                    toExists = true
                    break
                }
            }
    
            // Increment items in range
            if(itm[0] >= from && itm[0] <= to){
                itm[1] += increment
            }
    
            if(lastIncrement === 0 && itm[1] === 0){
                this.segments.splice(i - 1)
            }
    
            lastIncrement = itm[1]
        }
    
        if(!fromExists){
            this.segments.push([from, increment])
        }
    
        if(!toExists){
            this.segments.push([to, 0])
        }

        if(this.segments[this.segments.length -1][1] === 0 && this.segments[this.segments.length - 2][1] === 0){
            this.segments.splice(this.segments.length - 2, 1)
        }

        return this.segments
    }

    addMichal(from, to, amount) {
        console.log('from: ' + from + '; to: ' + to +  '; amount: ' + amount);
        if(this.segments.length==0)
        {
            this.segments.push([from, amount]);
            this.segments.push([to, amount]);
        } else {
            for (let i = 0; i < this.segments.length; i++) {
                let currentSegmentValue = this.segments[i][0];

                let test = 1
            }
        }

console.log(this.segments)
}
}

module.exports = IntensityManager;


