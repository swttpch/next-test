/**
 * Modal de confirmação ✅
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import React, { useState } from 'react';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';

function renderModalContent() {
	return (
		<div data-modal-content className={styles['modal-form']}>
			Tem certeza que deseja realizar essa ação?
		</div>
	);
}

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	function handleModalConfirm() {
		setModalIsOpen(false);
		alert('confirmado');
	}

	function handleModalClose() {
		setModalIsOpen(false);
	}
	return (
		<>
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
				{renderModalContent()}
			</Modal>
		</>
	);
}
