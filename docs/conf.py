import os
import sys
sys.path.insert(0, os.path.abspath('../app'))  # Ajuste o caminho conforme necessário

extensions = [
    'sphinxcontrib.phpdomain',
    'myst_parser'
]
