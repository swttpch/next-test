/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import React, { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';

function renderModalContent({count}: {count: number}) {
	return (
		<div data-modal-content className={styles['modal-form']}>
			<p>Tem certeza que deseja realizar essa ação?</p>
			<p>Você já confirmou {count} vezes.</p>
		</div>
	);
}

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [confirmCount, setConfirmCount] = useState(0);
	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('confirmado');
		setConfirmCount(old => old + 1);
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}
	return (
		<>

			<Head>
				<title>Modal de confirmação - {confirmCount}</title>
			</Head>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			{/* Renderizar modal de confirmação */}
			<Modal
				isOpen={modalIsOpen}
				title="Confirmação"
				onClose={handleModalClose}
				onConfirm={handleModalConfirm}
			>
				{renderModalContent({count: confirmCount})}
			</Modal>
		</>
	);
}
