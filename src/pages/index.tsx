import {
	Container,
	Heading,
	HStack,
	Stack,
	Highlight,
	Text,
	Button,
	Box,
	SlideFade,
	IconButton,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 50,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export default function Home() {
	const background = `linear-gradient(306deg, ${hue(340)}, ${hue(10)})`;
	return (
		<Container>
			<Stack>
				<HStack py={8}>
					<Heading fontSize={"xl"} fontFamily={"mono"} color={"white"}>
						Art of Selling
					</Heading>
				</HStack>
				<Stack spacing={16}>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
					>
						<div className="splash" style={{ background }} />
						<motion.div className="card" variants={cardVariants}>
							<Stack mt={2} spacing={8}>
								<Heading fontWeight={"black"} lineHeight={"10"}>
									<Highlight
										query={[
											"Fokusirani",
											"prodaju",
											"skladišta",
											"podršku",
											"štedite",
										]}
										styles={{
											color: "yellow.300",
										}}
									>
										Fokusirani na web prodaju, organizaciju skladišta
										i korisničku podršku. Sa nama štedite novac i
										vrijeme
									</Highlight>
								</Heading>
								<Text
									fontSize={"lg"}
									lineHeight={"7"}
									fontWeight={"medium"}
								>
									Art of Selling je programski paket dizajniran za
									social media online trgovine. Naši programi su
									intutivni i jednostavi za korištenje. Vaše kolege i
									kupci ce uživati prilikom korištenja naših programa.
								</Text>

								<Button size={"lg"} colorScheme={"blue"}>
									Kontaktiraj nas
								</Button>
								<motion.div
									animate={{ y: 40 }}
									transition={{
										delay: 1,
										repeat: 5,
										repeatDelay: 1,
										ease: "easeIn",
									}}
								>
									<HStack justify={"center"}>
										<IconButton
											aria-label="scroll down"
											icon={<ArrowDownIcon />}
											borderRadius={"full"}
											colorScheme={"yellow"}
										/>
									</HStack>
								</motion.div>
							</Stack>
						</motion.div>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
					>
						<div className="splash" style={{ background }} />
						<motion.div className="card" variants={cardVariants}>
							<Stack mt={2} spacing={8}>
								<Stack>
									<Heading
										fontSize={"xl"}
										fontFamily={"sans-serif"}
										bgGradient="linear(to-l, purple.100, purple.600)"
										bgClip="text"
										fontWeight={"extrabold"}
									>
										WEB SHOP
									</Heading>
									<Heading fontWeight={"black"} lineHeight={"10"}>
										<Highlight
											query={["prodavali", "web shop", "jeftina"]}
											styles={{
												color: "purple.300",
											}}
										>
											Dok ste prodavali putem DM-a, web shop
											tehnologija je postala jeftina i jednostavna
										</Highlight>
									</Heading>
								</Stack>
								<Text
									fontSize={"lg"}
									lineHeight={"7"}
									fontWeight={"medium"}
								>
									Svi naši web shop-ovi su primarno prilagođeni za
									smartphone uređaje. Svaka sekunda je bitna zato smo
									posebno optimizirali naše shop-ove za otvaranje ispod
									2 sekunde. Vaš shop će biti dostupan 24h, nema više
									ograničenja radnog vremena.
								</Text>
							</Stack>
						</motion.div>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
					>
						<div className="splash" style={{ background }} />
						<motion.div className="card" variants={cardVariants}>
							<Stack mt={2} spacing={8}>
								<Stack>
									<Heading
										fontSize={"xl"}
										fontFamily={"sans-serif"}
										bgGradient="linear(to-l, green.100, green.600)"
										bgClip="text"
										fontWeight={"extrabold"}
									>
										SKLADIŠTENJE
									</Heading>
									<Heading fontWeight={"black"} lineHeight={"10"}>
										<Highlight
											query={[
												"nemamo na stanju",
												"pogrešno ste poslali",
											]}
											styles={{
												color: "green.300",
											}}
										>
											Zaboravite na poruku &quot;nemamo na
											stanju&quot; i &quot;pogrešno ste poslali&quot;
											sa našim programom ne može doći do greške.
										</Highlight>
									</Heading>
								</Stack>
								<Text
									fontSize={"lg"}
									lineHeight={"7"}
									fontWeight={"medium"}
								>
									Jednostavna ogranizacija skladišta štedi vrijeme i
									novac. Naša jednistevena aplikacija za lociranje
									unutar skladišta će Vas spasiti od neugodnih
									razgovora sa kupcima. Svaka narudžba prolazi duplu
									kontrolu. Sa našim programom možete završavati
									narudžbe bez gledanja u display mi to zovemo skeniraj
									i slušaj.
								</Text>
							</Stack>
						</motion.div>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
					>
						<div className="splash" style={{ background }} />
						<motion.div className="card" variants={cardVariants}>
							<Stack mt={2} spacing={8}>
								<Stack>
									<Heading
										fontSize={"xl"}
										fontFamily={"sans-serif"}
										bgGradient="linear(to-l, orange.100, orange.600)"
										bgClip="text"
										fontWeight={"extrabold"}
									>
										KORISNIČKA PODRŠKA
									</Heading>
									<Heading fontWeight={"black"} lineHeight={"10"}>
										<Highlight
											query={[
												"nosite",
												"porukama",
												"pozivima",
												"organizujemo",
											]}
											styles={{
												color: "orange.300",
											}}
										>
											Ne znate kako da se nosite sa svim porukama i
											pozivima, dopustite nama da ih organizujemo za
											Vas.
										</Highlight>
									</Heading>
								</Stack>
								<Text
									fontSize={"lg"}
									lineHeight={"7"}
									fontWeight={"medium"}
								>
									Svaki kupac ima svoju priču zbog toga je bitna da u
									svakom trenutku znamo o čemu kupac priča. Naš program
									organizuje sve vaše slučajeve na jedno mjesto. Sa
									malo naše magije sa jednim klikom možete provjeriti
									narudžbe kupca i pratiti pošiljku.
								</Text>
							</Stack>
						</motion.div>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
					>
						<div className="splash" style={{ background }} />
						<motion.div className="card" variants={cardVariants}>
							<Stack mt={2} spacing={8}>
								<Stack>
									<Heading
										fontSize={"xl"}
										fontFamily={"sans-serif"}
										bgGradient="linear(to-l, blue.100, blue.600)"
										bgClip="text"
										fontWeight={"extrabold"}
									>
										INTEGRACIJA SA BRZOM POŠTOM
									</Heading>
									<Heading fontWeight={"black"} lineHeight={"10"}>
										<Highlight
											query={["vrijeme", "prepisivanja"]}
											styles={{
												color: "blue.300",
											}}
										>
											Prošlo je vrijeme prepisivanja
										</Highlight>
									</Heading>
								</Stack>
								<Text
									fontSize={"lg"}
									lineHeight={"7"}
									fontWeight={"medium"}
								>
									Integracija sa brzom poštom sa jednim klikom pravi
									naloge u sistemu brze pošte. Ne zaboravimo i
									otkupnine, sa našim programom bez brige možete znati
									da li je sav novac stigao. Bez biljeznica sa
									pristupom bilo gdje.
								</Text>
							</Stack>
						</motion.div>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
					>
						<div className="splash" style={{ background }} />
						<motion.div className="card" variants={cardVariants}>
							<Stack mt={2} spacing={8}>
								<Stack color={""}>
									<Heading
										fontSize={"xl"}
										fontFamily={"sans-serif"}
										bgGradient="linear(to-l, red.100, red.600)"
										bgClip="text"
										fontWeight={"extrabold"}
									>
										MALO ILI VELIKO NIJE BITNO
									</Heading>
									<Heading fontWeight={"black"} lineHeight={"10"}>
										<Highlight
											query={["online", "radite godinama"]}
											styles={{
												color: "red.300",
											}}
										>
											Tek ste krenuli prodavati online ili to vec
											radite godinama? Nije bitno!
										</Highlight>
									</Heading>
								</Stack>
								<Text
									fontSize={"lg"}
									lineHeight={"7"}
									fontWeight={"medium"}
								>
									Naši programi su prilagođeni za male i velike
									trgovine. Radite kod kuće? Bez brige i mi smo krenuli
									raditi od kuće, sve naše metode i programi se
									prilagođavaju Vama.
								</Text>
							</Stack>
						</motion.div>
					</motion.div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
					>
						<div className="splash" style={{ background }} />
						<motion.div className="card" variants={cardVariants}>
							<Stack mt={2} spacing={8}>
								<Stack color={""}>
									<Heading fontWeight={"black"} lineHeight={"10"}>
										<Highlight
											query={["Šta čekate?"]}
											styles={{
												color: "teal.300",
											}}
										>
											Šta čekate?
										</Highlight>
									</Heading>
								</Stack>
								<Text
									fontSize={"lg"}
									lineHeight={"7"}
									fontWeight={"medium"}
									pb={16}
								>
									Pišite nam na upit@aos.ba, niste tip osobe koja piše
									e-mail onda nam pišite na Viber ili WhatsApp +387 60
									320 4600 ili nas pozovite, radujemo se Vašem
									javljanju.
								</Text>
							</Stack>
						</motion.div>
					</motion.div>
				</Stack>
			</Stack>
		</Container>
	);
}
