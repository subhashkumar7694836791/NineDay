// const sounds=['first','second','third','four','five'];
// sounds.forEach(function(sound){
//     const btn=document.createElement('button');
//     btn.classList.add('btn');
//     btn.innerText=sound
//     btn.addEventListener('click',function(){
//         stopSongs()
//         document.getElementById('sound').play()
//     })
//     document.getElementById('boxs').appendChild(btn)
// })

// function stopSongs() {
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)

//         song.pause()
//         song.currentTime = 0;
//     })
// }
// other code

const sounds = ['first', 'second', 'third', 'four', 'five']

sounds.forEach(function(sound) {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click',function() {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('boxs').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(function(sound) {
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime = 0;
    })
}