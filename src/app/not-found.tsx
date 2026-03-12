import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 dark:bg-black">
			<div className="relative mb-8">
				<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 opacity-20 blur-lg" />
				<div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 dark:bg-neutral-900">
					<LinkIcon className="h-10 w-10 text-amber-600" />
				</div>
			</div>

			<div className="space-y-2 text-center">
				<h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
					404
				</h1>
				<h2 className="text-xl font-medium text-stone-600 dark:text-stone-400">
					Link quebrado ou inexistente
				</h2>
				<p className="mx-auto max-w-[280px] text-sm text-stone-500 dark:text-stone-500">
					O link que você tentou acessar não faz parte da lista oficial de João.
				</p>
			</div>

			<div className="mt-12 w-fit">
				<Link
					href="/"
					className="flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-700 py-3 px-6 text-base text-white transition-all hover:bg-amber-800"
				>
					Ver links
				</Link>
			</div>
		</main>
	);
}
