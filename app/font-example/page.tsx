import localFont from 'next/font/local'

const helvetica = localFont({
    src: '../../public/fonts/helvetica.ttf'
})

export default function fontExample() {
    return (
        <div>
            <div>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem accusantium laboriosam aspernatur itaque vitae, voluptatem officia. Sequi, quaerat harum. Fugit voluptas inventore, sit omnis deserunt ipsa harum reprehenderit vero?</p>
            </div>
        </div>
    )
}