import ParticlesComponent from "../../components/particlesComponent/particlesComponent";
import './infos.css'

function Infos() {
	return (
		<div className="background">
			<div className='particulabg'>
				<ParticlesComponent id='particles' />
			</div>
			<h1 className="title">Curiosidades Sobre Mim</h1>

      
			<ul className="list">
				<li>Meu nome é Giovanna Pergentino, tenho 19 anos;</li>
				<li>Sou uma pessoa criativa, proativa e estou sempre em busca de oportunidades para expandir minha experiência como desenvolvedora;,</li>
				<li>Tenho curso Técnico em Programação para Jogos Digitais e atualmente curso Bacharelado em Sistemas de Informação;</li>
				<li>Participei de um Hackathon em colaboração com o Oi Futuro, onde meu time foi o vencedor;</li>
				<li>Eu e meu time ganhamos em segundo lugar na maratona de programação da faculdade, onde solucionamos diversos desafios de código;</li>
				<li>Para manter minha curiosidade sempre em alta, eu continuo estudando novas linguagens, metodologias e frameworks dentro da tecnologia;</li>
				<li>Meu filme favorito é estrelas além do tempo,  que retrata a incrível história real de três mulheres afro-americanas que desafiaram as barreiras de gênero, raça e tecnologia durante os anos 1960 nos EUA.</li>
			</ul>
		</div>
	)
}

export default Infos;