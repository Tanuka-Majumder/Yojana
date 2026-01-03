# Yojana - Collaborative Software Development Platform

## Overview
**Yojana** is a collaborative software development platform that unifies **project planning, task coordination, and code implementation** within a single system. It reduces workflow fragmentation by enabling teams to plan, track, and implement software projects in a shared environment.

The platform integrates **Drishti**, a web-based code editor with accessibility-first capabilities, allowing developers-particularly visually impaired developers-to independently write, review, and test code using speech-enabled interfaces.

---

## Core Capabilities

### Collaborative Project Planning
- Organize work into **Sections**, **Catalogs**, and **Handouts** (tasks)
- Real-time task updates, progress tracking, and activity visibility
- Role-based access control (view/edit permissions)
- Checklists, labels, attachments, and task metadata
- Audit-friendly tracking of task changes and updates

### Drishti - Integrated Code Editor
Drishti is a built-in development environment that supports:
- Multi-language coding (50+ languages)
- In-browser code execution and testing
- File creation, upload, modification, and deletion
- Console output inspection and execution control

#### Accessibility Features
- Text-to-Speech (read code line-by-line or entire files)
- Speech-to-Text for voice-driven interaction
- Cursor position narration and line navigation
- Speech feedback for UI elements and editor actions
- Adjustable speech rate, pitch, and language settings

These features enable developers to understand code structure and runtime behavior without relying solely on visual inspection.

---

## System Architecture

### Backend
- **Node.js** with **Express**
- **MongoDB** for persistent storage
- RESTful APIs for collaboration, task management, and editor operations

### Frontend
- **React** with Redux-based state management
- Component-driven and behavior-driven design patterns
- Asynchronous data handling via HTTP/Ajax requests

### Accessibility Stack
- **Web Speech API**
  - Speech Synthesis (Text-to-Speech)
  - Speech Recognition (Speech-to-Text)

---

## Design Principles
- **Unified workflow**: Planning and implementation in one platform
- **Accessibility-first**: Inclusive design built into core features
- **User independence**: No external assistance required for coding or testing
- **Scalable collaboration**: Supports multiple users and concurrent workflows
- **Low cognitive overhead**: Simple, task-oriented interactions

---

## Use Cases
- Collaborative software development teams
- Academic and research project coordination
- Accessibility-focused coding environments
- Distributed teams requiring structured planning and execution
- Prototyping and experimentation workflows

---

## Research & Publication
This system is described and evaluated in a **peer-reviewed, Scopus-indexed publication**, detailing the platform architecture, collaboration workflows, accessibility features, and empirical observations:

**Yojana: Advanced Collaborative Software Development Platform with Special Features for Visually Impaired Developers to Combat Disparity Amidst Software Developers**  
*Grenze International Journal of Engineering and Technology (GIJET), 2022*  
Publication link: https://thegrenze.com/index.php?display=page&view=journalabstract&absid=1169&id=8

---

## Acknowledgements
This project uses [Material UI](https://mui.com), an open-source React UI framework, licensed under the [MIT License](https://github.com/mui/material-ui/blob/HEAD/LICENSE).
