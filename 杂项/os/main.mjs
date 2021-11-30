import FIFOArrayMemory from "./memorys/FIFOArrayMemory.mjs"
import FIFOListMemory from "./memorys/FIFOListMemory.mjs"
import LRUCounterMemory from "./memorys/LRUCounterMemory.mjs"
import LRUStackMemory from "./memorys/LRUStackMemory.mjs"

function main(totalCount, range) {
    const size3ArrayMemory = new FIFOArrayMemory(3)
    const size3ListMemory = new FIFOListMemory(3)
    const size3CounterMemory = new LRUCounterMemory(3)
    const size3StackMemory = new LRUStackMemory(3)
    const size4ArrayMemory = new FIFOArrayMemory(4)
    const size4ListMemory = new FIFOListMemory(4)
    const size4CounterMemory = new LRUCounterMemory(4)
    const size4StackMemory = new LRUStackMemory(4)
    for (let i = 0; i < totalCount; i++) {
        const randomNum = Math.random() * range >> 0
        size3ArrayMemory.insert(randomNum)
        size3ListMemory.insert(randomNum)
        size3CounterMemory.insert(randomNum)
        size3StackMemory.insert(randomNum)
        size4ArrayMemory.insert(randomNum)
        size4ListMemory.insert(randomNum)
        size4CounterMemory.insert(randomNum)
        size4StackMemory.insert(randomNum)
    }
    console.log(`size 3 FIFO array memory hit count is ${
        size3ArrayMemory.getHitCount()
    }`)
    console.log(`size 3 FIFO list memory hit count is ${
        size3ListMemory.getHitCount()
    }`)
    console.log(`size 3 LRU counter memory hit count is ${
        size3CounterMemory.getHitCount()
    }`)
    console.log(`size 3 LRU stack memory hit count is ${
        size3StackMemory.getHitCount()
    }`)
    console.log(`size 4 FIFO array memory hit count is ${
        size4ArrayMemory.getHitCount()
    }`)
    console.log(`size 4 FIFO list memory hit count is ${
        size4ListMemory.getHitCount()
    }`)
    console.log(`size 4 LRU counter memory hit count is ${
        size4CounterMemory.getHitCount()
    }`)
    console.log(`size 4 LRU stack memory hit count is ${
        size4StackMemory.getHitCount()
    }`)
}

main(10000, 10)
