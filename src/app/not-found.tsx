import Link from "next/link";
import { Link as LinkIcon, ChevronLeft } from "lucide-react";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 dark:bg-black">
			<div className="relative mb-8">
				<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 opacity-20 blur-lg"/>
				<div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 dark:bg-neutral-900">
					<LinkIcon className="h-10 w-10 text-amber-600" />
				</div>
			</div>

			<div className="space-y-2 text-center">
				<h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
					404
				</h1>
				<h2 className="text-xl font-medium text-neutral-600 dark:text-neutral-400">
					Link quebrado ou inexistente
				</h2>
				<p className="mx-auto max-w-[280px] text-sm text-slate-500 dark:text-slate-500">
					O link que você tentou acessar não faz parte da lista oficial de João.
				</p>
			</div>

			<div className="mt-12 w-full max-w-[320px]">
				<Link
					href="/"
					className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-4 text-lg font-semibold text-white transition-all hover:bg-amber-700 active:scale-[0.98]"
				>
					<ChevronLeft className="h-5 w-5" />
					Ver links
				</Link>
			</div>
		</main>
	);
}
