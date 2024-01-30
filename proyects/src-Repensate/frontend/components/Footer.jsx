const Footer = () => {
	return (
		<div>
			<div>
				<h2>
					Made with ♡ by{' '}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://instagram.com/nico_bustelo/"
					>
						Nicolás Bustelo
					</a>
				</h2>
				<div class="flex justify-center mt-4">
					<a
						href="https://github.com/nicobustelo/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="linkedin logo"
					>
						<img src="../assets/linkedin.png" alt="linkedin logo" />
					</a>
				</div>
			</div>
		</div>
	);
};

<div class="bg-gray-800">
	<div class="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
		<h2 class="text-sm font-semibold tracking-wide text-center text-gray-400">
			Made with ♡ by{' '}
			<a
				class="hover:text-emerald-500"
				target="_blank"
				rel="noopener noreferrer"
				href="https://twitter.com/katherinecodes"
			>
				Katherine Oelsner
			</a>
		</h2>
		<div class="flex justify-center mt-4">
			<a
				href="https://github.com/octokatherine/readme.so"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="github logo"
			>
				<img class="w-auto h-6" src="github.svg" alt="github logo" />
			</a>
		</div>
	</div>
</div>;

export default Footer;
