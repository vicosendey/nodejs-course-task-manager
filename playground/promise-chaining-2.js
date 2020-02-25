require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5e482d5073195543b458fe59').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e482cdd73195543b458fe58').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

