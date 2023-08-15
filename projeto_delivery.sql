PGDMP                         {            projeto_delivery    15.2    15.2 1    /           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            0           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            1           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            2           1262    17145    projeto_delivery    DATABASE     �   CREATE DATABASE projeto_delivery WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
     DROP DATABASE projeto_delivery;
                postgres    false            �            1259    17147    cadastro_cliente    TABLE     h  CREATE TABLE public.cadastro_cliente (
    id_cliente integer NOT NULL,
    nome_cliente character varying(60) NOT NULL,
    email_cliente character varying(30) NOT NULL,
    senha_cliente character varying(20) NOT NULL,
    cpf_cliente character varying(11) NOT NULL,
    endereco_cliente character varying(45) NOT NULL,
    idade_cliente integer NOT NULL
);
 $   DROP TABLE public.cadastro_cliente;
       public         heap    postgres    false            �            1259    17146    cadastro_cliente_id_cliente_seq    SEQUENCE     �   CREATE SEQUENCE public.cadastro_cliente_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.cadastro_cliente_id_cliente_seq;
       public          postgres    false    215            3           0    0    cadastro_cliente_id_cliente_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.cadastro_cliente_id_cliente_seq OWNED BY public.cadastro_cliente.id_cliente;
          public          postgres    false    214            �            1259    17154    cadastro_colaborador    TABLE     �  CREATE TABLE public.cadastro_colaborador (
    id_colaborador integer NOT NULL,
    nome_colaborador character varying(60) NOT NULL,
    email_colaborador character varying(30) NOT NULL,
    senha_colaborador character varying(20) NOT NULL,
    cpf_colaborador character varying(11) NOT NULL,
    endereco_colaborador character varying(45) NOT NULL,
    idade_colaborador integer NOT NULL
);
 (   DROP TABLE public.cadastro_colaborador;
       public         heap    postgres    false            �            1259    17153 '   cadastro_colaborador_id_colaborador_seq    SEQUENCE     �   CREATE SEQUENCE public.cadastro_colaborador_id_colaborador_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 >   DROP SEQUENCE public.cadastro_colaborador_id_colaborador_seq;
       public          postgres    false    217            4           0    0 '   cadastro_colaborador_id_colaborador_seq    SEQUENCE OWNED BY     s   ALTER SEQUENCE public.cadastro_colaborador_id_colaborador_seq OWNED BY public.cadastro_colaborador.id_colaborador;
          public          postgres    false    216            �            1259    17180    cardapio    TABLE     �   CREATE TABLE public.cardapio (
    id_cardapio integer NOT NULL,
    produto_id_cardapio integer NOT NULL,
    valor_produto_cardapio numeric(5,2)
);
    DROP TABLE public.cardapio;
       public         heap    postgres    false            �            1259    17179    cardapio_id_cardapio_seq    SEQUENCE     �   CREATE SEQUENCE public.cardapio_id_cardapio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.cardapio_id_cardapio_seq;
       public          postgres    false    223            5           0    0    cardapio_id_cardapio_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.cardapio_id_cardapio_seq OWNED BY public.cardapio.id_cardapio;
          public          postgres    false    222            �            1259    17192    comanda    TABLE     �   CREATE TABLE public.comanda (
    id_comanda integer NOT NULL,
    produto_id__comanda integer NOT NULL,
    valor_total_comanda numeric(5,2)
);
    DROP TABLE public.comanda;
       public         heap    postgres    false            �            1259    17191    comanda_id_comanda_seq    SEQUENCE     �   CREATE SEQUENCE public.comanda_id_comanda_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.comanda_id_comanda_seq;
       public          postgres    false    225            6           0    0    comanda_id_comanda_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.comanda_id_comanda_seq OWNED BY public.comanda.id_comanda;
          public          postgres    false    224            �            1259    17168    estoque    TABLE     �   CREATE TABLE public.estoque (
    id_estoque integer NOT NULL,
    produto_id_estoque integer NOT NULL,
    quantidade_estoque integer NOT NULL
);
    DROP TABLE public.estoque;
       public         heap    postgres    false            �            1259    17167    estoque_id_estoque_seq    SEQUENCE     �   CREATE SEQUENCE public.estoque_id_estoque_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.estoque_id_estoque_seq;
       public          postgres    false    221            7           0    0    estoque_id_estoque_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.estoque_id_estoque_seq OWNED BY public.estoque.id_estoque;
          public          postgres    false    220            �            1259    17161    produto    TABLE     :  CREATE TABLE public.produto (
    id_produto integer NOT NULL,
    nome_produto character varying(50) NOT NULL,
    tipo_produto character varying(20) NOT NULL,
    quantidade_produto integer NOT NULL,
    validade_produto character varying(10) NOT NULL,
    codigo_barra_produto character varying(20) NOT NULL
);
    DROP TABLE public.produto;
       public         heap    postgres    false            �            1259    17160    produto_id_produto_seq    SEQUENCE     �   CREATE SEQUENCE public.produto_id_produto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.produto_id_produto_seq;
       public          postgres    false    219            8           0    0    produto_id_produto_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.produto_id_produto_seq OWNED BY public.produto.id_produto;
          public          postgres    false    218            ~           2604    17150    cadastro_cliente id_cliente    DEFAULT     �   ALTER TABLE ONLY public.cadastro_cliente ALTER COLUMN id_cliente SET DEFAULT nextval('public.cadastro_cliente_id_cliente_seq'::regclass);
 J   ALTER TABLE public.cadastro_cliente ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    215    214    215                       2604    17157 #   cadastro_colaborador id_colaborador    DEFAULT     �   ALTER TABLE ONLY public.cadastro_colaborador ALTER COLUMN id_colaborador SET DEFAULT nextval('public.cadastro_colaborador_id_colaborador_seq'::regclass);
 R   ALTER TABLE public.cadastro_colaborador ALTER COLUMN id_colaborador DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    17183    cardapio id_cardapio    DEFAULT     |   ALTER TABLE ONLY public.cardapio ALTER COLUMN id_cardapio SET DEFAULT nextval('public.cardapio_id_cardapio_seq'::regclass);
 C   ALTER TABLE public.cardapio ALTER COLUMN id_cardapio DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    17195    comanda id_comanda    DEFAULT     x   ALTER TABLE ONLY public.comanda ALTER COLUMN id_comanda SET DEFAULT nextval('public.comanda_id_comanda_seq'::regclass);
 A   ALTER TABLE public.comanda ALTER COLUMN id_comanda DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    17171    estoque id_estoque    DEFAULT     x   ALTER TABLE ONLY public.estoque ALTER COLUMN id_estoque SET DEFAULT nextval('public.estoque_id_estoque_seq'::regclass);
 A   ALTER TABLE public.estoque ALTER COLUMN id_estoque DROP DEFAULT;
       public          postgres    false    221    220    221            �           2604    17164    produto id_produto    DEFAULT     x   ALTER TABLE ONLY public.produto ALTER COLUMN id_produto SET DEFAULT nextval('public.produto_id_produto_seq'::regclass);
 A   ALTER TABLE public.produto ALTER COLUMN id_produto DROP DEFAULT;
       public          postgres    false    219    218    219            "          0    17147    cadastro_cliente 
   TABLE DATA           �   COPY public.cadastro_cliente (id_cliente, nome_cliente, email_cliente, senha_cliente, cpf_cliente, endereco_cliente, idade_cliente) FROM stdin;
    public          postgres    false    215   �<       $          0    17154    cadastro_colaborador 
   TABLE DATA           �   COPY public.cadastro_colaborador (id_colaborador, nome_colaborador, email_colaborador, senha_colaborador, cpf_colaborador, endereco_colaborador, idade_colaborador) FROM stdin;
    public          postgres    false    217   >       *          0    17180    cardapio 
   TABLE DATA           \   COPY public.cardapio (id_cardapio, produto_id_cardapio, valor_produto_cardapio) FROM stdin;
    public          postgres    false    223   ?       ,          0    17192    comanda 
   TABLE DATA           W   COPY public.comanda (id_comanda, produto_id__comanda, valor_total_comanda) FROM stdin;
    public          postgres    false    225   ;?       (          0    17168    estoque 
   TABLE DATA           U   COPY public.estoque (id_estoque, produto_id_estoque, quantidade_estoque) FROM stdin;
    public          postgres    false    221   i?       &          0    17161    produto 
   TABLE DATA           �   COPY public.produto (id_produto, nome_produto, tipo_produto, quantidade_produto, validade_produto, codigo_barra_produto) FROM stdin;
    public          postgres    false    219   �?       9           0    0    cadastro_cliente_id_cliente_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.cadastro_cliente_id_cliente_seq', 1, false);
          public          postgres    false    214            :           0    0 '   cadastro_colaborador_id_colaborador_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public.cadastro_colaborador_id_colaborador_seq', 1, false);
          public          postgres    false    216            ;           0    0    cardapio_id_cardapio_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.cardapio_id_cardapio_seq', 1, false);
          public          postgres    false    222            <           0    0    comanda_id_comanda_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.comanda_id_comanda_seq', 1, false);
          public          postgres    false    224            =           0    0    estoque_id_estoque_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.estoque_id_estoque_seq', 1, false);
          public          postgres    false    220            >           0    0    produto_id_produto_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.produto_id_produto_seq', 1, false);
          public          postgres    false    218            �           2606    17152 &   cadastro_cliente cadastro_cliente_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.cadastro_cliente
    ADD CONSTRAINT cadastro_cliente_pkey PRIMARY KEY (id_cliente);
 P   ALTER TABLE ONLY public.cadastro_cliente DROP CONSTRAINT cadastro_cliente_pkey;
       public            postgres    false    215            �           2606    17159 .   cadastro_colaborador cadastro_colaborador_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.cadastro_colaborador
    ADD CONSTRAINT cadastro_colaborador_pkey PRIMARY KEY (id_colaborador);
 X   ALTER TABLE ONLY public.cadastro_colaborador DROP CONSTRAINT cadastro_colaborador_pkey;
       public            postgres    false    217            �           2606    17185    cardapio cardapio_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.cardapio
    ADD CONSTRAINT cardapio_pkey PRIMARY KEY (id_cardapio);
 @   ALTER TABLE ONLY public.cardapio DROP CONSTRAINT cardapio_pkey;
       public            postgres    false    223            �           2606    17197    comanda comanda_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.comanda
    ADD CONSTRAINT comanda_pkey PRIMARY KEY (id_comanda);
 >   ALTER TABLE ONLY public.comanda DROP CONSTRAINT comanda_pkey;
       public            postgres    false    225            �           2606    17173    estoque estoque_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.estoque
    ADD CONSTRAINT estoque_pkey PRIMARY KEY (id_estoque);
 >   ALTER TABLE ONLY public.estoque DROP CONSTRAINT estoque_pkey;
       public            postgres    false    221            �           2606    17166    produto produto_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.produto
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id_produto);
 >   ALTER TABLE ONLY public.produto DROP CONSTRAINT produto_pkey;
       public            postgres    false    219            �           2606    17186 *   cardapio cardapio_produto_id_cardapio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cardapio
    ADD CONSTRAINT cardapio_produto_id_cardapio_fkey FOREIGN KEY (produto_id_cardapio) REFERENCES public.estoque(id_estoque);
 T   ALTER TABLE ONLY public.cardapio DROP CONSTRAINT cardapio_produto_id_cardapio_fkey;
       public          postgres    false    223    221    3211            �           2606    17198 (   comanda comanda_produto_id__comanda_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comanda
    ADD CONSTRAINT comanda_produto_id__comanda_fkey FOREIGN KEY (produto_id__comanda) REFERENCES public.cardapio(id_cardapio);
 R   ALTER TABLE ONLY public.comanda DROP CONSTRAINT comanda_produto_id__comanda_fkey;
       public          postgres    false    225    3213    223            �           2606    17174 '   estoque estoque_produto_id_estoque_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.estoque
    ADD CONSTRAINT estoque_produto_id_estoque_fkey FOREIGN KEY (produto_id_estoque) REFERENCES public.produto(id_produto);
 Q   ALTER TABLE ONLY public.estoque DROP CONSTRAINT estoque_produto_id_estoque_fkey;
       public          postgres    false    3209    219    221            "   }  x�=��n�0Eד���N����-E��z�X!�!��'�ch�V��"?��ײ�{��s��¡m�oY\��=������۪�)��s��8�����5�
U��2��P�`X~�ʒ��7�S��AK�[��x�_uqό��9�<���҈R9~`R粮��Rz[ޱ��L<�G�*)��:�&���h�iM��{\� Lk����]��?��_��An���2Ӑ���#����[���Ł<َā;g�@�:ё�:sH�M�zq�cx|��q��G�'r_��o���Cq�Ng�L˲<U��[��Fyȋ����zg˓G'��#>t���g��l&��u}u)��O��J��]���rkxݓe��C;�q����T:��&I��ڭ<      $   �   x���MN�0F��S�Q�n��UH���a3I�p��?]p��ŰB+q��>�a���R��"^�jsQ�#L�C��}�P�btS1x�K�l��)岬����N��^���	��@�6)������S�9��3f<\i�ܜ�ķS���V�F�f����PI"`��e5�M2m�+o�T�����nq������?�X��=���X��I��-ڈ�1}j��kA�9rP      *      x�3�4�42�30�2�4�42�b���� /i�      ,      x�3�4�45�30�2�4�41�b���� /��      (      x�3�4�44�2�4Q1z\\\ �i      &   �   x�m�?
�0����Sx���I�Z��.����Ğ�[��b*�S�|�1��<�L�*�`oj�L�Q�˱����$�l�z˨�M��PJ���j��qm��&\��Oc̳KC��Dkh�!,�t	���p���k�!k��U�/�t2�     